PGDMP     2                	    |        
   containers %   14.13 (Ubuntu 14.13-0ubuntu0.22.04.1) %   14.13 (Ubuntu 14.13-0ubuntu0.22.04.1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384 
   containers    DATABASE     [   CREATE DATABASE containers WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C.UTF-8';
    DROP DATABASE containers;
                postgres    false            �            1259    16399 
   containers    TABLE     �   CREATE TABLE public.containers (
    containernumber character varying NOT NULL,
    nameofship character varying,
    containersize numeric,
    datecontainershipped date
);
    DROP TABLE public.containers;
       public         heap    postgres    false            �          0    16399 
   containers 
   TABLE DATA           f   COPY public.containers (containernumber, nameofship, containersize, datecontainershipped) FROM stdin;
    public          postgres    false    209   3       a           2606    16405    containers containers_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.containers
    ADD CONSTRAINT containers_pkey PRIMARY KEY (containernumber);
 D   ALTER TABLE ONLY public.containers DROP CONSTRAINT containers_pkey;
       public            postgres    false    209            b           1259    16406    idx_containers_containernumber    INDEX     g   CREATE UNIQUE INDEX idx_containers_containernumber ON public.containers USING btree (containernumber);
 2   DROP INDEX public.idx_containers_containernumber;
       public            postgres    false    209            �   V   x�342�t�v�W.I,�45�4202�50".S3/N_Gנ`o����lN#S=3�
c]�
CN�Ԓ�JNc�����	W� �o     